export const metadata = {
  title : {
    absolute:"My files"
  }
}


async function File({params}) {
    const {filePath}=(await params);
    return  <h1>file /<i>{filePath?.join('/')}</i> </h1>
  }
  
  export default File