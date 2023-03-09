import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/navbar/Navbar copy";
import Home from "./components/Pages/Home/Home";
import Flights_booking from "./components/Pages/Flights_estimates/Flights_estimates";
import About from "./components/Pages/About/About";
import { BACKEND_URL } from "./customHooks/helper";
import Travel_updates from "./components/Pages/Travel-Updates/Travel_updates";
import Holiday_Packages from "./components/Pages/Holiday_Packages/Holiday_packages";
import Hotel from "./components/Pages/Holiday_Packages/hotel/Hotel";
import { navlinks } from "./data/travigodata";
import BlogSingle from "./components/Pages/Travel-Updates/Blog/blog-single-page/BlogSingle"
import SingleService from "./components/services/Singleservice";
import Contact from "./components/Pages/contact/Contact";
import SupportEngine from "./components/Pages/Home/support_chat/SupportEngine";
import SinglePage from "./components/Pages/Travel-Updates/Blog/singlePage/SinglePage";

 
const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Routes>
          <Route
            path="*"
            element={
              <main>
                <Navbar navlinks={navlinks} />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  404 NOT FOUND
                </h1>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="flights" element={<Flights_booking />} />
          <Route path="Holiday_Packages" element={<Holiday_Packages />} />
          <Route path="Travel_updates" element={<Travel_updates />} />
          <Route path="about" element={<About />} />
          <Route path="enquiry" element={<Contact/>} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
        <Route path="/hotels/:id" element={<Hotel/>}/>
       
          <Route path='/blogsingle/:id' element={<BlogSingle />} />
          <Route path='/servicesingle/:id' element={<SingleService />} />
          
          
        </Routes>
        <SupportEngine />
      </>
    </ApolloProvider>
  );
}

export default App;
