
import React from "react";

const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {

    return (
        <div className="flex">
            <div className="form-control">
                <label htmlFor="male" className={`label gap-2 cursor-pointer  ${ selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text border-slate-900">Male</span>
                    <input type="checkbox" className="checkbox "
                        checked={selectedGender === "male"}
                        onChange={ () => onCheckboxChange("male")}
                    />
                </label>
            </div>

            <div className="form-control">
                <label htmlFor="female" className={`label gap-2 cursor-pointer  ${ selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text border-slate-900">Female</span>
                    <input type="checkbox" className="checkbox "
                        checked={selectedGender === "female"}
                        onChange={ () => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;

