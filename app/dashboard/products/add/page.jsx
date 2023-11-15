import styles from "../../../components/dashboard/dashboard.module.css";

const AddProduct = () => {
  return (
    <div className={`${styles.product} w-full mt-10`}>
      <form
        action=""
        className={`mx-auto w-[600px] bg-[var(--bgSoft)] flex flex-wrap gap-7 p-10 rounded-lg`}
      >
        <input type="text" placeholder="Title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="Text" placeholder="Color" name="color" />
        <input type="Text" placeholder="Size" name="size" />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="5"
          placeholder="Description"
        />
        <button className="btn_primary px-5 py-3 font-semibold">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
