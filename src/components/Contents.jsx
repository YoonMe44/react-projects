const Contents = () => {
  return (
    <main className="main">
        <div className="main-content">
            <h1>The Power Behind Your Passion</h1>
            <p>
            Explore the full Apple experience — iPhone, Mac, iPad, Watch, and
            more.
            </p>
            <div className="main-btn">
            <button>Shop Now</button>
            <button>Category</button>
            </div>
            <div className="main-info">
            <p>Also Availiable On</p>
            <div className="main-icons">
                <img src="/images/facebook-icon.png" alt="facebook" />
                <img src="/images/instagram-icon.webp" alt="instagram" />
                <img src="/images/twitter-icon.webp" alt="twitter" />
            </div>
            </div>
        </div>

        <div className="main-image">
            <img src="/images/main.png" alt="main" />
        </div>
    </main>
  );
};

export default Contents;
