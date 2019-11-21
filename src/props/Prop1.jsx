import React from 'react';
import './style.css';

const Materi1 = (props) => {
    return(
        <div className="wrraper">
            <div className="content1">
           
                <div className="gambarpaket">
                    <img src={props.img} className="imagesliderr1" />
                   
                    
                </div>
                
                <p className="des2"  >{props.tanggal}</p>
                    <p className="des3">{props.judul}</p>
                          <p className="des2">{props.desc}</p>
            </div>

        </div>
    )
}

export default Materi1;