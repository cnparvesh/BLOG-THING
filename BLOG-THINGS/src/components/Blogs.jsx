import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=6"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Something went wrong while loading blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

 
  if (loading) {
    return (
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  
  if (error) {
    return (
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        {error}
      </div>
    );
  }

  
  return (
    <div
      style={{
        padding: "60px 40px",
        minHeight: "90vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "42px",
          fontWeight: "700",
        }}
      >
        Latest Blogs
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              background: "rgb(24, 23, 30)",
              padding: "30px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "0.3s",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {blog.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#cfd3ff",
              }}
            >
              {blog.body.slice(0, 120)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}