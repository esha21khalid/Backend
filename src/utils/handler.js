// 2 methods
// 1 is trycatch
// 2 is promises
// ____________________________________________________________________________//

// 2 part___________________________________________
const handler = (solver) => {
 return (req, res, next) => {
    Promise.resolve(solver(req, res, next)).catch((err) => next(err));
  };
};

export  default handler;

// 1 part ----------------------------------------
// const handler = (fn) =>async (req,res,next) => {
// try {
//     await fn(req,res,next)
// } catch (error) {
//     res.status(error.code || 500).json({
//         success:false,
//         message:error.message || "Internal Server Error"
//     })
// }
// }

// export default handler;
