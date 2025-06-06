import React from 'react'
import { styles } from './labelStyles'

function Label(props) {
    const label = props.country.id
    const price = props.country.price
    const position = props.country.labelPosition

    const colors = {
        innerGold: "#ffc107",
        innerSilver: "#949494",
        innerBronze: "#8d3f00",
        outterGold: "#dfa805",
        outterSilver: "#757575",
        outterBronze: "#5e2b01",
    }

    const colorPicker = (type) => {
        switch (type) {
            case "gold":
                return { outter: colors.outterGold, inner: colors.innerGold };
            case "silver":
                return { outter: colors.outterSilver, inner: colors.innerSilver };
            case "bronze":
                return { outter: colors.outterBronze, inner: colors.innerBronze };
        }
    }

    const coinUiComponent = (coinValue, type) => (
        <div style={styles.coinOutter(colorPicker(type).outter)}>
            <div style={styles.coinInner(colorPicker(type).inner)}>
                <span>{coinValue}</span>
            </div>
        </div>
    )



    return (
        <div className={`position-absolute bg-light p-1 d-flex flex-column align-items-center rounded rounded-3 border-bottom border-3`} style={styles.label(position.left, position.top)}>
            <h2 style={styles.labelName}>{label}</h2>
            {false &&
                <div className='d-flex' >
                    {coinUiComponent(price.gold, "gold")}
                    {coinUiComponent(price.silver, "silver")}
                    {coinUiComponent(price.bronze, "bronze")}
                </div>
            }

        </div>
    )
}

export default Label