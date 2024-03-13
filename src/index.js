import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from 'react-paginate';
import api from "./services/api"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./components/Characters";


import "./styles.css";


function App() {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    api.get()
    .then(({data}) => {
        const slice = data.slice(offset, offset + perPage);
        setList(slice);
        setPageCount(Math.ceil(data.length / perPage));
    })
    .catch(error => console.error('Error fetching characters:', error));

  }, [offset, perPage]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };

  const charactersComponent = list.map(character => (
    <Characters
      key={character.id}
      image={character.image}
      name={character.name}
      alive={character.alive}
      dateOfBirth={character.dateOfBirth}
      house={character.house}
      patronus={character.patronus}
      actor={character.actor}
    />
    ));

  return (
    <div className="App">
      <Header title="Harry Potter" />
        <div className="container">{charactersComponent}
        </div>
        
        <ReactPaginate
        previousLabel={"← Anterior"}
        nextLabel={"Proxima →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
