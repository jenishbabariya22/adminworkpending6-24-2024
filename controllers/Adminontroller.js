const viewAdmin = (req,res) => {
    return res.render('admin/viewadmin');
}

const addAdminPage = (req,res) => {
    return res.render('admin/addadmin');
}

const adduser = (req,res)=>{
    return res.redirect('admin/addadmin')
}

module.exports = {
    viewAdmin,addAdminPage,adduser
}