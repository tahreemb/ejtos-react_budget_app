const Currency = () => {
    return(
<div className="currency">
    <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">
    <select className="custom-select">
    <option defaultValue>Currency</option>
        <option value>$ Dollar</option>
        <option value>£ Pound</option>
        <option value>€ Euro</option>
        <option value>₹ Ruppee</option>
        </select>
    </label>
    </div>
</div>
    )
};

export default Currency;
