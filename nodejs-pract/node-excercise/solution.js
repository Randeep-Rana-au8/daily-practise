async function sendEmails() {
  const customer = await getCustomer(1);
  console.log(customer);
  if (customer.isGold) {
    const topMovies = await getTopMovies();
    console.log("top movies", topMovies);
    const email = await sendEmail("Email sent...");
    console.log(email);
  }
}

sendEmails();

// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

function getCustomer(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(status) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(status);
    }, 4000);
  });
}
