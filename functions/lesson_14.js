// asyc/await
function waitFor(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

function returnValue() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function execute() {
  let valueExec = await returnValue()

  await waitFor(1500);
  console.log(`Async/Await ${valueExec}...`);

  await waitFor(1500);
  console.log(`Async/Await ${valueExec + 1}...`);

  await waitFor(1500);
  console.log(`Async/Await ${valueExec + 2}...`);

  return valueExec + 3;
}

// execute().then(console.log);

async function executeTrue() {
  const value = await execute();
  console.log(value);
}

executeTrue();