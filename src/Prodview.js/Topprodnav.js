import React from 'react'

const Topprodnav = () => {
    const navarray=["home","clothing","womens-clothing","kurtas-set","Anouk kurta set"]
    const last = navarray.pop();
    return (
        <div className="topprodnav">
           {navarray.join(' / ')} / <span>{last}<i class="fas fa-chevron-right"></i>More kurtas</span>
        </div>
    )
}

export default Topprodnav
