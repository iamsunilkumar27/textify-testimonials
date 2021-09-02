import './Testimonial.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';


export default function Testimonial() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        try {
            const result = await axios.get('https://testimonialapi.toolcarton.com/api')
            // const value = result.data.product_list;
            const value = result.data
            // const homeContent = value.slice(0,3)
            setData(value)
            // console.log(homeContent)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data);





    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                    <h1>Testimonials V.2</h1>
                    <div >
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    data.map((x, i) => {
                                        return (
                                            <div key={x.id} className={i === 0 ? "carousel-item active text-center" : "carousel-item text-center"} data-bs-interval="10000">
                                                <img src={x.avatar} className='rounded-circle col-12 mt-3 col-md-6 img-height '></img>
                                                <p className='carousel-paragraph mt-3'>{x.message}</p>
                                                <h2 >{x.name}</h2>
                                                <h3 >{x.designation}</h3>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon span-color" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon span-color" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}