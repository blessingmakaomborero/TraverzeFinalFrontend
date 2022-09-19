import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Flights_booking from "./components/Pages/Flights_estimates/Flights_estimates";
import About from "./components/Pages/About/About";

import Travel_updates from "./components/Pages/Travel-Updates/Travel_updates";
import Holiday_Packages from "./components/Pages/Holiday_Packages/Holiday_packages";
import Hotel from "./components/Pages/Holiday_Packages/hotel/Hotel";
import List from "./components/Pages/Holiday_Packages/list/List";
import BlogSingle from "./components/Pages/Travel-Updates/Blog/blog-single-page/BlogSingle"
import SingleService from "./components/services/servicedetails";
import ContactUsPage from "./components/forms/ContactUsPage";
import SupportEngine from "./components/Pages/Home/support_chat/SupportEngine";
import { BACKEND_URL } from "./customHooks/helper";

 
const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <main>
                <Navbar />
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
          <Route path="enquiry" element={<ContactUsPage />} />
          <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
       
          <Route path='/blogsingle/:id' element={<BlogSingle />} />
          <Route path='/servicesingle/:id' element={<SingleService />} />
           
        </Routes>
        <SupportEngine />
      </div>
    </ApolloProvider>
  );
}

export default App;
