async function comments({params}) {
    console.log(await params);
    const paramsObj = await params;
    const {blogID} = paramsObj
    console.log(blogID);
    
    return  <div>All comments on <b>{blogID}</b>  page</div>
  }
  
  export default comments