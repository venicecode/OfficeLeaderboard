const authController = {};

// check to make sure the user puts in valid inputs on front-end
authController.validateUserInput = (req, res, next) => {
  next();
};

// check to see if the jwt has laready been signed
authController.isSigned = (req, res, next) => next();

// set info for userid and username when

// auth logic to create a new user
authController.signUp = (req, res) => res.status(200).json(

            {
              company: 'dunder',
              office: 'scranton',
              isSigned: true,
              user: {
                userId: 12313,
                userName: 'Jake',
                userScores: [{ gameName: 'ping pong', score: 21 }, { gameName: 'rage cage', score: 3 }],
              },
              companyGames: [
                {
 gameName: 'ping pong',
                  gameScores: [{ userName: 'jake', score: 21 },
                    { userName: 'jay', score: 2 },
                    { userName: 'justin', score: 1 }],
                },

                {
 gameName: 'rage cage',
                  gameScores: [{ userName: 'danny', score: 31 },
                    { userName: 'nic', score: 27 },
                    { userName: 'harris', score: 26 }],
                },

                { 
gameName: 'fooseball',
                  gameScores: [{ userName: 'danny', score: 81 },
                    { userName: 'nic', score: 27 },
                    { userName: 'harris', score: 26 }],
                },
              ],
            }
);

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
};
module.exports = authController;
