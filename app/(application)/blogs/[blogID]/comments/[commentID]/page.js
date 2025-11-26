async function Comment({params}) {
    const paramsObj = await params;
    const {blogID,commentID} = paramsObj
    console.log(paramsObj);
    
    return  <div>Comments no <i>{commentID}</i> on <b>{blogID}</b>  page</div>
  }
  
  export default Comment