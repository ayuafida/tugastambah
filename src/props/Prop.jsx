import React from 'react';
import './style.css';

const Materi = (props) => {
    return(
        <div className="wrraper">
            <div className="content">
           
                <div className="gambarpaket">
                    <img src={props.img} className="imagesliderr" />
                   
                    
                </div>
                
                <p className="des1"  >{props.tanggal}</p>
                    <p className="des">{props.judul}</p>
                          <p className="des1">{props.desc}</p>
            </div>

        </div>
    )
}

export default Materi;