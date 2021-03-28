 const store ={
    currentPage: 'home',
    showUsers:null,
    currentUser: localStorage.getItem('user') !== null? localStorage.getItem('user'):'Justin',
    showDialog:false,
}

export default store