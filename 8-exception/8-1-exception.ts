// Error(Exception) handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error('not exist');
  }
  return 'file content';
}

function closeFile(fileName: string) {
  console.log(`closed file: ${fileName}`);
}

const fileName = 'not exist';
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log('catch');
} finally {
  closeFile(fileName);
}
