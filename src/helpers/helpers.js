const routeCheck = (path, route) => {
    const pathArr = path.split('/')
    
  return  pathArr.includes(route)

}


export default routeCheck;