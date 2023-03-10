const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const customFetch = async (url, options = {}) => {
  const { timeoutMs = 30000, ...fetchOptions } = options;
  
  const controller = new AbortController();
  const timeoutPromise = timeout(timeoutMs).then(() => controller.abort());

  const responsePromise = fetch(url, { signal: controller.signal, ...fetchOptions });
  
  const response = await Promise.race([responsePromise, timeoutPromise]);
  
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

const executeTask = async (task, ...args) => {
  const { timeoutMs = 30000 } = task;
  
  const timeoutPromise = timeout(timeoutMs).then(() => {
    throw new Error(`Task timed out after ${timeoutMs} ms`);
  });

  const taskPromise = task(...args);
  
  const result = await Promise.race([taskPromise, timeoutPromise]);
  
  return result;
};

const tasks = [
  async () => await customFetch('endpointA'),
  async (dataFromA) => await customFetch(`endpointB?param=${dataFromA.param}`),
  async (dataFromAandB) => await customFetch(`endpointC?id=${dataFromAandB.id}`),
  async (dataFromAandBandC) => {
    // Write output to file
    return true;
  },
  async () => {
    // Cleanup resources
    return true;
  }
];

const executeTaskList = async (taskList) => {
  let previousResult = null;
  
  for (const task of taskList) {
    try {
      previousResult = await executeTask(task, previousResult);
    } catch (error) {
      console.error(`Task failed with error: ${error.message}`);
    }
  }
};

executeTaskList(tasks);
