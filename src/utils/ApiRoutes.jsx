const ApiRoutes = {
    LOGIN : {
        path : '/user/login',
        authendicate : false
    },
    SIGNUP : {
        path : '/user/signup',
        authendicate : false
    },
    GET_ALL_USERS : {
        path : '/user',
        authendicate : false
    },
    GET_USER : {
        path : '/user/:id',
        authendicate : false
    },
    EDIT_USER :{
        path : '/user/edit/:id',
        authendicate : false
    },
    DELETE_USER :{
        path : '/user/delete/:id',
        authendicate : false
    },
    GET_SALES_ORDER :{
        path : '/sales-order',
        authendicate : false
    },
    CREATE_SALES_ORDER :{
        path : '/sales-order',
        authendicate : false
    },
    SEARCH_SALES_ORDER:{
        path : '/sales-order/search',
        authendicate : false
    },
    EDIT_SALES_ORDER :{
        path : '/sales-order/edit-sales-order/:id',
        authendicate : false
    },
    DELETE_SALES_ORDER :{
        path : '/sales-order/delete-sales-order/:id',
        authendicate : false
    },
    GET_PURCHASE_ORDER :{
        path : '/purchase-order',
        authendicate : false
    },
    CREATE_PURCHASE_ORDER :{
        path : '/purchase-order',
        authendicate : false
    },
    SEARCH_PURCHASE_ORDER:{
        path : '/purchase-order/search',
        authendicate : false
    },
    EDIT_PURCHASE_ORDER :{
        path : '/purchase-order/edit-purchase-order/:id',
        authendicate : false
    },
    DELETE_PURCHASE_ORDER :{
        path : '/purchase-order/delete-purchase-order/:id',
        authendicate : false
    },
    GET_TESTIMONIALS :{
        path : '/testimonial',
        authendicate:false
    },
    DELETE_TESTIMONIAL :{
        path : '/testimonial/:id',
        authendicate:false
    }
    
}

export default ApiRoutes
