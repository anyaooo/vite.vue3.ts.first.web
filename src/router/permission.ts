import router from '.'

router.beforeEach(to => {
    const {path} = to
    if(path !== '/manage') {
        
    }
})
