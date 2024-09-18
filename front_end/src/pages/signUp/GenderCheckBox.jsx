

const GenderCheckBox = () => {
    <div className="flex">
        <div className="form-control">
            <label htmlFor="male" className={'label gap-2 cursor-pointer'}>
                <span className="label-text border-slate-900">Male</span>
                <input type="checkbox" className="checkbox "/>
            </label>
        </div>

        <div className="form-control">
            <label htmlFor="female" className={'label gap-2 cursor-pointer'}>
                <span className="label-text border-slate-900">Female</span>
                <input type="checkbox" className="checkbox "/>
            </label>
        </div>
    </div>
}

export default GenderCheckBox;