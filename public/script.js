const myRequest = new XMLHttpRequest();
myRequest.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=8dedee57");
myRequest.onload = () => {
  const myPage = JSON.parse(myRequest.response);
  console.log(myPage);

  const poster = document.createElement("img");
  poster.src = `${myPage.Poster}`;
  const posterAccess = document.querySelector(".poster");
  posterAccess.append(poster);

  const title = document.createElement("div");
  title.append(myPage.Title);
  const titleAccess = document.querySelector(".title");
  titleAccess.append(title);

  const year = document.createElement("div");
  year.append(myPage.Year);
  const yearAccess = document.querySelector(".year");
  yearAccess.append(year);

  const rated = document.createElement("div");
  rated.append(myPage.Rated);
  const ratedAccess = document.querySelector(".rated");
  ratedAccess.append(rated);

  const released = document.createElement("div");
  released.append(myPage.Released);
  const releasedAccess = document.querySelector(".released");
  releasedAccess.append(released);

  const runtime = document.createElement("div");
  runtime.append(myPage.Runtime);
  const runtimeAccess = document.querySelector(".runtime");
  runtimeAccess.append(runtime);

  const genre = document.createElement("div");
  genre.append(myPage.Genre);
  const genreAccess = document.querySelector(".genre");
  genreAccess.append(genre);

  const director = document.createElement("div");
  director.append(myPage.Director);
  const directorAccess = document.querySelector(".director");
  directorAccess.append(director);

  const writer = document.createElement("div");
  writer.append(myPage.Writer);
  const writerAccess = document.querySelector(".writer");
  writerAccess.append(writer);

  const actors = document.createElement("div");
  actors.append(myPage.Actors);
  const actorsAccess = document.querySelector(".actors");
  actorsAccess.append(actors);

  const plot = document.createElement("div");
  plot.append(myPage.Plot);
  const plotAccess = document.querySelector(".plot");
  plotAccess.append(plot);

  const language = document.createElement("div");
  language.append(myPage.Language);
  const languageAccess = document.querySelector(".language");
  languageAccess.append(language);

  const country = document.createElement("div");
  country.append(myPage.Country);
  const countryAccess = document.querySelector(".country");
  countryAccess.append(country);

  const awards = document.createElement("div");
  awards.append(myPage.Awards);
  const awardsAccess = document.querySelector(".awards");
  awardsAccess.append(awards);

  const metascore = document.createElement("div");
  metascore.append(myPage.Metascore);
  const metascoreAccess = document.querySelector(".metascore");
  metascoreAccess.append(metascore);

  const imdbrating = document.createElement("div");
  imdbrating.append(myPage.imdbRating);
  const imdbratingAccess = document.querySelector(".imdbrating");
  imdbratingAccess.append(imdbrating);

  const imdbvotes = document.createElement("div");
  imdbvotes.append(myPage.imdbVotes);
  const imdbvotesAccess = document.querySelector(".imdbvotes");
  imdbvotesAccess.append(imdbvotes);

  const imdbid = document.createElement("div");
  imdbid.append(myPage.imdbID);
  const imdbidAccess = document.querySelector(".imdbid");
  imdbidAccess.append(imdbid);

  const type = document.createElement("div");
  type.append(myPage.Type);
  const typeAccess = document.querySelector(".type");
  typeAccess.append(type);

  const dvd = document.createElement("div");
  dvd.append(myPage.DVD);
  const dvdAccess = document.querySelector(".dvd");
  dvdAccess.append(dvd);

  const boxoffice = document.createElement("div");
  boxoffice.append(myPage.BoxOffice);
  const boxofficeAccess = document.querySelector(".boxoffice");
  boxofficeAccess.append(boxoffice);

  const production = document.createElement("div");
  production.append(myPage.Production);
  const productionAccess = document.querySelector(".production");
  productionAccess.append(production);

  const website = document.createElement("a");
  website.append(website.href = `${myPage.Website}`);
  const websiteAccess = document.querySelector(".website");
  websiteAccess.append(website);

  const response = document.createElement("div");
  response.append(myPage.Response);
  const responseAccess = document.querySelector(".response");
  responseAccess.append(response);
};
myRequest.send();
