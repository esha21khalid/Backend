import handler from '../utils/handler.js'

const registerUser = handler(async (req, res) => {
    //    get request from frontend
    // validation (ka email sai ha / account empty tu nai ha).
    // check krna ka account phla bna ha ka nai .. check krna email sa / username sa
    //file check means ka avataer ha ya img ha
    // agr file ha tu cloudinary pa send krdo
    // user object bnana .. db ma entry ko allow krna ..
    // removw password and refresh token from response
    //  check for user creation 
    //return res


    const {username,email, fullname,password}= req.body 
    console.log("email", email);
})

export default registerUser