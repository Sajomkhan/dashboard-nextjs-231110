const page = () => {
  let x = 1;

  if (x == 0) {
    console.log("testing ok");
  } else {
    console.log("testing not ok");
  }

  const handleFrom = async (formData) => {
    "use server";
    const username = formData.get("username");
    console.log("Hello", username);
  };

  return (
    <div>
      <form action={handleFrom}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
