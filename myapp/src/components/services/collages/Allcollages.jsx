import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../Header';
import Footer from '../../Footer';
const Allcollages = () => {
    const [collages, setCollages] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/collages')
            .then(res => {
                setCollages(res.data);

                console.log("addedd");
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>

            <Header />

            <div className="container mt-5 justofy-content-center">
                <div className="row">
                    <div className="col-10  mx-auto">
                    {collages.map(collages => (

                           
                     <div class="card" >
                        <div class="card-body" key={collages.id}>
                            <h5 class="card-title">{collages.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                       
                    </div>
                    ))}
                    </div>
                   

          </div>
        </div >


            <Footer />
        </>
    )
}

export default Allcollages
