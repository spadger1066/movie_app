import React, {useEffect, useState} from "react";

const MovieCreateForm = (props) => {
    const defaultData = {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: ''
    };

    const formData = props.initialData ? {...props.initialData} : defaultData;

    const [form, setForm] = useState(formData);

    // useEffect(() => {
    //     if (props.initialData) {
    //         setForm(props.initialData);
    //     } else {
    //         alert('Some issue with useEffect')
    //     }
    // }, [props.initialData]);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        setForm({
            ...form,
            [name]: target.value
        })
    };

    const handleGenreChange = (event) => {
        const { options } = event.target;
        const optionsLength = options.length;
        let value = [];

        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setForm({
            ...form,
            genre: value.toString()
        })
    };

    const submitForm = () => {
        props.handleFormSubmit({...form})
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={form.name}
                       onChange={handleChange} placeholder="Movie name..."/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={form.description}
                       onChange={handleChange} placeholder="Movie description..."/>
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input type="number" max="5" min="0" className="form-control" id="rating" name="rating" value={form.rating}
                       onChange={handleChange} placeholder="0"/>
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" name="image" value={form.image}
                       onChange={handleChange} placeholder="http://....."/>
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input type="text" className="form-control" id="cover" name="cover" value={form.cover}
                       onChange={handleChange} placeholder="http://......"/>
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea className="form-control" id="longDesc" name="longDesc" value={form.longDesc}
                          onChange={handleChange} rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="form-control" id="genre" name="genre" onChange={handleGenreChange}>
                    <option>drama</option>
                    <option>action</option>
                    <option>crime</option>
                    <option>adventure</option>
                    <option>fantasy</option>
                </select>
            </div>
            <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>
        </form>
    );
};

export default MovieCreateForm;
