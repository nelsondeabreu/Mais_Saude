import style from "./columRow.module.css"




export function Mb3({children}) {

    return (
        <div className={`${style.Mb3} card mb-3 `}>
            {children}
        </div>
    )
}

export function Mb4JustifyStart({children}) {

    return (
        <div className={`${style.Mb3} d-flex justify-content-start mb-4 `}>
            {children}
        </div>
    )
}

export function Mb4JustifyEnd({children}) {

    return (
        <div className={`${style.Mb3} d-flex justify-content-end mb-4 `}>
            {children}
        </div>
    )
}

export function ColLg2({children}) {

    return (
        <div className={`${style.ColLg2} col-lg-1`} >
            {children}
        </div>
    )
}

export function ColLg3({children}) {

    return (
        <div className={`${style.ColLg3} col-lg-3`} >
            {children}
        </div>
    )
}

export function ColLg4({children}) {

    return (
        <div className={`${style.ColLg4} col-lg-4`} >
            {children}
        </div>
    )
}

export function ColLg6({children}) {

    return (
        <div className={`${style.ColLg6} col-lg-6`} >
            {children}
        </div>
    )
}

export function ColLg8({children}) {

    return (
        <div className={` ${style.ColLg8} col-lg-8`}>
            {children}
        </div>
    )
} 

export function Col12({children}) {

    return (
        <div className={`${style.Col12} col-12`}>
            {children}
        </div>
    )
} 

export function ColMd4({children}) {

    return (
        <div className={`${style.ColMd4} col-md-4`}>
            {children}
        </div>
    )
}

export function ColMd8({children}) {

    return (
        <div className={` ${style.ColMd8} col-md-8`}>
            {children}
        </div>
    )
} 



export function ColXxl4ColMd6({children}) {

    return (
        <div className={`${style.ColXxl4ColMd6} col-xxl-4 col-md-4`}>
            {children}
        </div>
    )
}

export function ColXxl4ColXl12({children}) {

    return (
        <div className="col-xxl-4 col-xl-12">
            {children}
        </div>
    )
}

export function Row({children}) {

    return (
        <div className={`${style.Row} row`}>
            {children}
        </div>
    )
}

export function RowGap({children}) {

    return (
        <div className={`${style.RowGap} row`}>
            {children}
        </div>
    )
}


export function Rowgb0({children}) {

    return (
        <div className="row gb-0">
            {children}
        </div>
    )
}