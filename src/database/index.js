import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://admin:admin@resto.dznyta0.mongodb.net/restoorant?retryWrites=true&w=majority";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Restoorant database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
