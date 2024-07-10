import React from "react";
import style from "./newPost.module.css"
import { FiImage} from "react-icons/fi";


export default function NewPost ({reference, click}){
    const [file,setFile]=React.useState(null)

    function handleChange(e){
        setFile(e.target.files[0]);
    }

    return(

            <nav className={style.profileBody}>
                <div className={style.newPost}>
                        <textarea placeholder="Partilhe conhecimento!!" ref={reference}/>
                    <nav className={style.midiaBtn}>
                        <div className={style.midia}>
                            <label htmlFor="file-input" className="file-input-label">
                                <input
                                    id="file-input"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleChange}
                                />
                                <span className="file-icon">{<FiImage/>} Midia</span>
                            </label>
                        </div>
                        <button className={style.btnPost} onClick={()=>click(file)}>Postar</button>
                    </nav>
                </div>
            </nav>

    )
}