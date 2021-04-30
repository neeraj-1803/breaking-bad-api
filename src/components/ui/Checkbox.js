import React from 'react'

const Checkbox = ({checked, setChecked}) => {
    return (
        <label className="check">
            <input type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
            />
            Better Call Saul
        </label>
    )
}

export default Checkbox
