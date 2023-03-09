import { gql } from "@apollo/client";

const BUY_CARDS = gql`
  query GET_BUY_CARDS {
    houses(filters: { categories: { Category: { contains: "Buy" } } }) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Andress
          Price
        }
      }
    }
  }
`;
const FLIGHT = gql`
query Flight($id: ID){
  flight(id: $id){
    data{
      id
      
      attributes{
       cityA
        cityB
        To
        From
        price
        planename
        planeImg{
          data{
            attributes{
              url
            }
          }
        }
        
    }
    }
  }}
`;
const FLIGHTS =gql`
query Flights{
  flights{
    data{
      id
      attributes{
        cityA
        cityB
        planename
        To
        price
        From
        planeImg{
          data{
            attributes{
              url
            }
          }
        }
    }
    }
  }}
`;
const ALL_PACKAGES = gql`
  query GET_ALL_PACKAGES {
    packages{
      data{
        id
        attributes{
          title
          description
          includes
          PeopleSharing
          excludes
          itinerary
          duration
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

const HOLIDAY_PACKAGES_CARDS = gql`
  query GET_HOLIDAY_PACKAGES_CARDS {
    packages(filters:{categories:{Category:{contains: "Holiday Package"}}}
    ){
      data{
        id
        attributes{
          title
          description
          includes
          excludes
          PeopleSharing
          itinerary
          duration
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
const WEEKENDBREAKS = gql`
  query GET_WEEKENDS {
    packages(filters:{categories:{Category:{contains: "Weekend Break"}}}
    ){
      data{
        id
        attributes{
          title
          description
          includes
          excludes
          PeopleSharing
          itinerary
          duration
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GROUPTOURS = gql`
  query GET_GROUPS {
    packages(filters:{categories:{Category:{contains: "Group Tour"}}}
    ){
      data{
        id
        attributes{
          title
          description
          includes
          excludes
          itinerary
          PeopleSharing
          duration
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
const LONGTERMS = gql`
  query GET_LONGTERM {
    packages(filters:{categories:{Category:{contains: "Long Term Slow Travel"}}}
    ){
      data{
        id
        attributes{
          title
          description
          includes
          excludes
          PeopleSharing
          itinerary
          duration
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;
const PACKAGE = gql`
query package ($id: ID){
  package(id: $id) {
  data{
    attributes{
      title
          description
          includes
          excludes
          itinerary
          activities
          duration
          PeopleSharing
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
    }
  }
  }
    }
`;

const BLOGS = gql`
query blogs{
  blogs{
    data{
      id
      attributes{
        title
        subTitle
        rating
        createdAt
        quote
        para1
        para2
        para3
        paragraph
        Description
        Cover{
          data{
            attributes{
              url
            }
          }
        }
        news_update{
          data{
            attributes{
              Newscategory
            }
          }
        }
       
    }
    }
  }}
`;

const BLOG = gql`
query blog($id: ID){
  blog(id: $id){
    data{
      id
      attributes{
        title
        rating
        createdAt
        paragraph
        Description
        Cover{
          data{
            attributes{
              url
            }
          }
        }
        news_update{
          data{
            attributes{
              Newscategory
            }
          }
        }
       
    }
    }
  }}
`;

const SERVICES = gql`
query services{
  services{
    data{
      id
      attributes{
        title
        subTitle
        Icon{
          data{
            attributes{
              url
            }
          }
        }
       
    }
    }
  }}
`;

const HERO = gql`
query hero{
  herovideos{
    data{
      id
      attributes{
        herovids
        hero{data
        {attributes
        {
          url
        }}}
      }
    }
  }
}
`;
const SERVICE = gql`
query service($id: ID){
  service(id: $id){
    data{
      id
      attributes{
        info
        title
        subTitle
        Icon{
          data{
            attributes{
              url
            }
          }
        }
        image{
          data{
            attributes{
              url
            }
          }
        }
    }
    }
  }}
`;
const HEROVIDEO = gql`
query service($id: ID){
  herovideo(id: $id){
    data{
      id
      attributes{
       
        hero{
          data{
            attributes{
              url
            }
          }
        }
        
    }
    }
  }}`;
const FILTERED_CARDS = gql`
  query GET_FILTERED_CARDS(
    $cat: String
    $maxPrice: Float
    $minPrice: Float
    $forRent: Float
    $page: Int
  ) {
    houses(
      filters: {
        categories: { Category: { contains: $cat } }
        or: [{ Price: { eq: $forRent } }, { Price: { gte: $minPrice } }]
        and: { Price: { lt: $maxPrice } }
      }
      pagination: { pageSize: 3, page: $page }
    ) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Andress
          Price
          Rent
        }
      }
    }
  }
`;

export { BUY_CARDS, BLOGS, BLOG, FILTERED_CARDS, HOLIDAY_PACKAGES_CARDS,PACKAGE ,ALL_PACKAGES, GROUPTOURS,WEEKENDBREAKS,LONGTERMS,SERVICES,SERVICE,HERO,HEROVIDEO,FLIGHT,FLIGHTS};
