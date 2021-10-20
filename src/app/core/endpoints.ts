export const PATHS={
  messages : {
    GET : {url:'/messages'}
  },
  LineStats :{
    GET: { url:'/statsLine'}
  },
  PieStats:{
    GET:{url : '/statsPie'},
  } ,
  DoubleStats: {
    GET : {url:'/doubleStats'}
  },
  auth: {
    register:{
     POST:{url:'/users'}
    },
    login:{
      POST:{url:'/users'}
    }
  },
  users:{
    GET:{url:'/users'}
  }
}
