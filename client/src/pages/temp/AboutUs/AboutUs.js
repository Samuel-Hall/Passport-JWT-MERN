import React, { Component } from "react";
import { Row, Col } from "react-materialize";
// import { Row } from "../../../components/shared/grid/Row";
// import { Col } from "../../../components/shared/grid/Col";
import "./AboutUs.css";
import Nav from "../../../components/shared/Nav";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Nav isPublic={true} />
        <div className="container aboutContainer">
          <Row className="about-us">
            <h3>About Us</h3>
            <div className="picRow">
              <Col s={2}>
                <img
                  className="us-icon"
                  placeholder="Tyler"
                  src="https://media.licdn.com/dms/image/C5603AQHHNRPklT_yBw/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=WoEQk4rwatyptnNk6_v0DKAwSNDlpOZ4tLFZ6gDsnCo"
                />
                <h5>Tyler Maxwell</h5>
                <ul>
                  <li>Front-end Lead</li>
                </ul>
              </Col>
              <Col s={2}>
                <img
                  className="us-icon"
                  placeholder="Sam"
                  src="https://media.licdn.com/dms/image/C4E03AQEtCJdLHAfXnA/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=Ow27GF2tJcttxBsK8CAtyc2X_HxAl83MX_KlS7JgXSQ"
                />
                <h5>Samuel Hall</h5>
                <ul>
                  <li>Passport</li>
                  <li>Bcrypt</li>
                  <li>Back-end</li>
                </ul>
              </Col>
              <Col s={2}>
                <img
                  className="us-icon"
                  placeholder="Brian"
                  src="https://media.licdn.com/dms/image/C4E03AQEY0mP87ZqIAA/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=yQzrRf3rciWtodu4T1YVPLP05oNQr-C_TmBnJ17MxN4"
                />
                <h5>Brian Burch</h5>
                <ul>
                  <li>Draft.js</li>
                  <li>Front-end</li>
                </ul>
              </Col>
              <Col s={2}>
                <img
                  className="us-icon"
                  placeholder="Nolan"
                  src="https://media.licdn.com/dms/image/C5603AQFLmf1aaPuR6A/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=8O6Khc5BcP2GXs2APNLPkt58tw-lbmIQCwArksh3mvM"
                />
                <h5>Nolan Klinke</h5>
                <ul>
                  <li>Styling</li>
                  <li>Sass</li>
                </ul>
              </Col>
              <Col s={2}>
                <img
                  className="us-icon"
                  placeholder="Matt"
                  src="https://media.licdn.com/dms/image/C4E03AQGbE0-ZrWTvPg/profile-displayphoto-shrink_200_200/0?e=1546473600&v=beta&t=wH7mD3g7G-ypGilq7htn6HZl_y1d5Wn7ygFOIqVcBdw"
                />
                <h5>Matt O'Grady</h5>
                <ul>
                  <li>Back-end</li>
                  <li>Front-end</li>
                </ul>
              </Col>
            </div>
          </Row>
        </div>

        <div className="container project-goal">
          <Row className="projectInfo">
            <h3>Dialectic - Explained</h3>
            <br />
            <h5>Inspiration</h5>
            <p>
              The idea for this project came from Tyler's past experience
              running a website for a student group. It was a simple WordPress
              website which was great for informing the public about the group's
              activities, but it wasn't great for inner-group communication and
              project planning. Our project,{" "}
              <b>
                <i>Dialectic</i>
              </b>
              , aims to serve both of these functions. A dialectic is a
              discourse between two or more people holding different points of
              view about a subject but who wish to establish the truth through
              reasoned arguments. Our project aims to achieve similar ends
              through reasoned communication between group members about
              projects before the ultimate truth of those projects is announced
              to the public.
            </p>
            <br />
            <h5>Public View</h5>
            <p>
              The initial view of this application, the public view, displays
              the organization's logo along with all published posts ordered by
              recency. Anyone is allowed to view this content. This serves as
              the point of contact to the public for the organization.
            </p>
            <br />
            <h5>Private View</h5>
            <p>
              The Private view is where authenticated users can create new
              projects, tasks, discussions, and posts. These projects will then
              be populated on the Public side where anyone can view. This
              Private view is split up into two main sections:
            </p>
            <h6>
              <strong>Users:</strong>
            </h6>
            <p>
              The initial administrator user is created upon first login. The
              app checks to see if any users exist in the database, if not, it
              allows only the initial user to be created from the public view.
              From here, only this authenticated user can create new users.
            </p>
            <p>
              The Users screen opens up with a page to view all users in the
              database. Here you can make changes to their accounts (username,
              password, email, etc.). On the left of this page is an option to
              add new users. The "Add User" form allows you input all necessary
              information.
            </p>
            <p>
              Note: Validation is in place so that no duplicate users can be
              created.
            </p>
            <h6>
              <strong>Projects:</strong>
            </h6>
            <p>
              Authenticated users can create projects which contain a task
              board, discussion forum, and post editor, and then assign the
              appropriate amount of total funds alotted for the project. The
              tasks board allows groups to break down large projects into
              smaller chunks and distribute funds to each task.
            </p>
            <p>
              The discussion forum allows all users to have a centralized portal
              for communication about each project. All users can update the
              project with who's doing what, set time expectations, or even ask
              general questions or clarification.
            </p>
            <p>
              From the post editor, users can create the public facing content
              as the projects move along. This allows the organization to
              interface with their audience as progress is made.
            </p>
          </Row>
        </div>

        <div className="container technoUsed">
          <Row>
            <h3>Technologies Used</h3>
            <div className="picRow">
              <Col>
                <img
                  className="tech-icon"
                  placeholder="mongo-db"
                  src="https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png"
                />
                <h5>Mongo DB</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="express-js"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUyMjL///8uLi4sLCwjIyMfHx8mJiYICAgXFxchISEpKSkaGhocHBwSEhIYGBj19fW9vb3Hx8fc3Nzu7u7Nzc2RkZGmpqaenp5VVVVISEjj4+NtbW14eHhdXV2FhYW0tLQ+Pj4AAADW1tZnZ2dKSkq4uLg6OjqHh4dycnJ9fX2ampqQkJCtra3Ly8v2fD57AAAPZklEQVR4nO2dZ4OqOBSGSQhIFQELFkavbUbH+f9/b3PoJTRFBdz3y+6dIPCknXPS4NDQxb37BZ6u/wnbkG2Z28Xssnad5XK32y2Xjru+zBZb07Jf8PSnEhrWafZz1PSxJhNR4XkciucVkcjaWNeOP7OTZTzzJZ5GuL9ddvJYEBXMlQkrojCWd5fb/lkv8hTC/cIlklzBluaUJeIunkLZOqG9XQsq4WvDxeKJKqy3rTfNdglXc4eW3R10oWhZOvNVq+/UIqF9O+qkfs0sEib68dZiSbZGaK41+XG8AFLW1mZbL9YOob3g1EcqZ16Kyi3aKcg2CK2NRlrF80W0jdXC2z1OOHX1dosvlqK707cT/jnSPZahrnjJ+Xsr4dSR2updioQl57FyfITQcp/O5zO6j7TH+wmNi/7M+pkUr1/ud87vJpxL4ov4QKI0fzHhfqm9kA+kLe/0y+8j/Bq9ogGmhUdfLyOccs8w8NUi3D296h2EX/rrC9AX1u8oxsaE1vk9BeiLnBsbjqaE87cVoC/cuFNtRmgc1LfygdRDM9vYiHDFvdIGFknkGg0CNCGcvLmGhsL65DmEV/3daJH06zMIf97fBGOpP60TGs47jURexKnb39QktHfPiuPvlbKrOYxTj3CFXxUo1ReP63WptQgtsRudaFpYrOXf1CG0XhLKNxeW6iDWILSEbgJSRKEGYjVhV0sQVKcUKwlXnWyDobBY2d1UEdp8lwEpIl9lNCoIjV33zERa/K7C9FcQOl0z9HkpziOE6265amyR9f2Es1cPGd4nbXYv4aQ74VK5SuPFEsJVXwApYonNKCHkum0nksJlGIUphy6MydSVeGhOOO9SSF8ttXCQsYjQkt79zg1V6KEWEZ770wh94XMzwq8+mPq0SMGcBptw2h9DEUtnz0yxCXtkKGIVmAzmX3tYR0Hsesoi3I/e/a53asSaCGcRLvtYR0F4WY9w3o+IgiWNYffzhEbfbH1SUj7gzxNe+uSPZiVeqgmtPprCWHrOecsRul0feioX71YR9tKbSSrn2WQJnX4XIS3E7NBbhvCv70VIC/GvlNDpq7GPhZ0ywmmfbWEoaVpC2POO1FemO00R9twWhkrbxBThpvuzFHWkbIoI7f663GlpdgHhop+Bb15kUUD47hdrUWxCs19jwGVSTSbhehj9DEhZswgH08+AEn1NTHiT3/1aLUq+MQiP/XdJY+FjnrBH86F1FM+ZRoTzoRhDX2SeIxxA3JRUHEOFhPYQ4qakJDtDuB1STwqStxnCAZl7X5HRDwmFd79R6xLShPvh+KSh1H2KcDCBU6wwhAoIBzFAk1Y4XBMQDq8IaW+aJOzd6pk6kvYJwkHFFaHILUF4GZo1BCmXBOGu2CnFCqFqcKpVIF6s/zPvGSI7l737sE8MK0ny7rqLCY3CSirqy81iPl9sdvERLaKu567Huj6G/8q65zpggRxm8/n8y1FTBw9Juj/BjImmS+ENieR80WuvP9w426OL0nn9DWmbpU5qJ4WSjYjQGrMv4dXfKMyyLsHOEpHGJadMMIk5A9n0jeUTMgXYcR06hci4JTbvU2/4V4QjWY6Lqe1dSW8nxmcJ7dep3SuKED8e2YtkIZckxRpbEeGJ7bMJLjx7NTmdTPgfaylGP7yks21k+TOPwgSZGqfDumvb3J5OXm82i5bn6AaaiZzq+p3cFAaGpA1ktEWf8QfP+OPiYiQuJNnT02lrAo5xIDWSku9/ighnzMUJ6i9Nmp8lTZY16QhLqf1FtVBg6TU3sLjzG2quR6jTG0+O8DNhTC70vc2winiEY+jipte1CxGpRP9hzLAk0GeM4UAhYxkWhwKLYrdHVYU0aQcR7VqsTEpKnEWEzMBC/objBcJdXViHTeL+DDE8IDnoAQt0J15BAeG/GzLig2tEiVZYcxQR/v4z6cXcmHYQ9BKdAppimP+8Tns/I1z3iQ1kOOPwPliDHZVcZVJSfnjhEbIWQYHT85c84EOhRWf4WaFdac2OnARYMbfy6zkQusjgkjkGu5Kvckj4TTN8E+4Jh7Uht+QSM+JEE2AidSudZMHwmGaNUJGUkr9EyiNkjZTqNlqlPR3YnHLz7zOaJpqiTpvVkg8JJ1Z2o81oEpojSkhf7hD1xBgyMXUt2dD67r08DQ3M9PNl+lulIiktLSS0GcNs4nfeSsKaqvBN7KjkoRGGtJRwhW7ZDCMGmmgBoY2+o2SZ1uds89FNZHu5KK3QNZ0I9s2LEEqSMjezA0KWsVBXaJKLGcdRmAUrHvwiFteJGitAf5S7F7kGf6SEaB9nJ83ia7YPhIFObxqTYmQ7QKjkYnlSBsIKCM18LYWhqvzom0aLKMgN6IfAKnqNMHppIGRM8BDk2UGP8BBltfKFUP5a3fLfR5uiSSbntanxrZQnZf5qBoSMUSgyZ9Vd5Qehc/gmFGYjekvk49oMhAwfV52iP80nNOJ2R58/ZeTGFRnwZAhgs1vkNd+xKklKyxuNAkJGgE8bM8MNgPXw67AMxtTU7vS5x5kkPOd+xolXv3FRwkR90WyWIYY+3G/htINYamynsyQpKS/M59gGn12vYXFj1MahdVvUEt4SFQYIGQuM+YPfEOldE0PrZ/bQghjkoggHQ9yWrPNQS5LS180CQka94mkz/DfK6Z+VeEXiLQhIrd+AvpQRTENmQKv2vbbwj7Spi6xnGMEL+a7Z6rbhdE1MZ0VJUlJe/ASE69w1zOXEvm4JRxpcLpysLJSQOWpH/B4GfJqIkC/eGBl0Grw6851y21y4Yur40JKk5FXrgDBfV7Irp9iEYOrRIXl3SmgVEP4omTJU8otdM4Tg8znzcHX6dDNKvmdJUkzoBoR5swCEKqMGUcWAYOppRiYLsaQM84QbZLAfMUpkGibqCP/4LPYh1fmVJCUwPMK8WwoNp2rGFPzvk5gy4V4ZMge1aEXJtsOw+6khhUh4AyRfObtWkhQ0NiBkjGEIfqaXyDf15JLax0cJWS4g5OUu19McG807K35ww/pBYVIZIfXorqygUYrCIs/fxpw0STZFsBYMQmhygU+TtEzssA1LnvkhuTPBIbjZj8uTMrfaFRNqf+iP0aB2KzvIKi30t1WbRkvhDYCQYeOELVqpOULqMjAmnrFrrzA4VdtcFw8Vhi9NakAItjJfhuBJ+rkOjXDitTjwwaOmCIQMD4nWCM8zTBPKJ7TKuwey7y9KLHzFy7+SpAaEkPaVQ6Q10/ckMY2yw/U3As2MRfj/E9aSB4i1PYc7TQjWKr+sfGx7Bok6rfvcjTTvPiVJWYplYV9KH7RHdjaDwbz4CzRHcdDrr44PmqIXPeUaFw0X/P4n0w5p0ea2BkBcCv0PVKLcPlbZwyhJKiJkdVBAs8i0RH0VvKlGPdrvuKIoRujagLVAq3/pnwm/YdyeIQSaTbq+YdlAU7/LoHFYBh/qglffSpLSdwvtIXNqDTrJn1TgODoF5aNEI0/B7WluWOFI1GSKTqnCl91o5idD6IVex+QfcNBDU2k08vlN21aaw14TKElKK/Jp8n4pSLThqNI4XoVBwhuUKqZlZqfsK3SsXlOEkagdHDcRVVRv/CzM3iyhtzv5EI8CizIF/A1KlT4F/Sa8MRHmkvyaWJKUJgz9Uva8DMYUce/qgiiKRJM2djgqqCcboS8YEYam6I0m0pDD3ow1Qn8n6N5h3OHQVJaQU2Bx1uSoy/AMVf424ATm8PXg4Jn9QYcbEUFSfuk/r1pVUkpRbMEeEKZlBYMAq9N1Npv/QbRy9R4OjfA34yJB1wtN0RsRFiB6M8z5bHY9wYC0dQ5zMEfIKd6Jq6stfcbN20RwiWsf76XZE5q2OHkD9F9qdVJSUXxYOImvHxLbTk87DwtKPtvO6b02cKJUMKov8vN4G6B1iU/M1FHOU8L6JZ6AMG443SoviVX39i1xtmhJUkJRjF+8WohXz9830zQn1wMJR7/PHOt2opfgE8JnDdzrif7u9r2r/CqEoi5/t/Ta7dUVsi+iqOevOU0z599HTa6bFCkap2GMtUXCCtE0TSgJpJMKCWFuT6a/qzeBiL1rZeYz6PMF+nzCOHGsJClQNNZWNLnWXDFhJxSNl7ICnvvUMcJozJs5b3GXOkYYzVu0twG/W4SJuafWFiZ2i5CP5w8LTH5zdYswMQd8amvBULcI5XgevzVzQQmn3SFMrMUoXk/TUMrl9tWd5VWJ9TRla6KaSSHdAUyuifqAdW3DX5u4H/z60uGvEf6Add7DX6s//P0Ww98z8wH7noa/d234+w+Hv4f0A/YBD38v9/D34w8rvmCeqTD8czGGZPTZZ5t8wPk0AzpjCCM24WBCqMJzogbT1xSe9TX889o+4My9YQzXlJ2b+AFnXw4hhio/v/QDzqDtfyHmNlLkzoLue0uUqs6C7nt3Wn2ed99tYo0z2Yd/rv4HfBth+N+3+IBvlHzAd2aG/60gNPzvPfXzKxeNvtnVx3ra7LtrH/DtvP6d4Nb4+4fD/4blB3yHtFcm475vyfZpzvTO7wEP/5vOH/Bd7g/4tjrKHtvVRSnFp5TUITR2XR+Y8vaTPkCIbL7bNgPzdgVBFSFaFW/v64CwWGInahJSD7W7iLjQG21CiCyhq4hYqAasQ9jZUqxTgvUIkdXJtojFOoD1CNGK757R4PnKTqYBIbKzp/i9Xcquykw0I0SG0y0HjjgVhr4xIUI/XQr6tZ/a712fEF27E0zByb1PIKTxYje6VFwaDz5CiFbsAzZeLJGr14neQ4iMw/sbo3qo28fcQwgH5Ly3pmKpcNiwJUJknd9pNsi5lh/zECEcHvWuYsR6wdxEy4Royr2nGAnHnl1qn5AW4+j1xYhHdxTg3YRov3z1QKO2ZE1hP48QOtVX2kaxcRf6OCEyLvqrQipevzSzge0QUsPhvsQ4YsltbCJaIqS9qvN0Riw59/SgbREi9OdIz6yrvOT8Vb/EUwlpObqsQ/tbkaK7j5VfO4S0PW60Z7gARNs80v5CtUEIX1ziKk8PbCZF5RY1B2Iq1A4hlbnW5LZ6HSxra7P6kfXUGiGcQHnUyeOQmOjHWzvF56lFQqrV3JHkR/pWXpaceaMQvlLtElLZ27Wm5g5Nr0VHVG29bbH0fLVOCNovXCLJDb4oiBVZIu7iTt+6XE8hBO1vl508Foo/TxiyicJY3l1uT6EDPY0QZFin2fqo6WNNJqLC8zgUzysikbWxrh3Xs5N1v1tdQ08lDGRb5nYxu6xdZ7nc7XbLpeOuL7PF1rRab3QMvYLwvfqfsP/6D/8NAhPHwZQDAAAAAElFTkSuQmCC"
                />
                <h5>Express.js</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="react-hs"
                  src="data:image/png;base64,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"
                />
                <h5>React.js</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="node-js"
                  src="data:image/png;base64,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"
                />
                <h5>Node.js</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="passport-js"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABOFBMVEUAAAD9/f0133nU/QIBt+7N+AD7+/sBu/Qr3nza/wKVlZUAtvM25Hzj77Pi7rTX/wJMTExdXV034G9lZWVqamoBv/hOTk4Aa4vd/wLNzc2J50s36X5fX1+M60svxWsy1HMKKxclnVUBseYAcpUVwMefn58ghUglLAAWwscTu8dNXAFIVgAZHgCoxgEICwDGxsYBm8pAQEAAPU8AW3YBfaMAUWkAMT8WXjMfJgC63ALB5QEHHhCuzgEnpVluhAEAGiIAj7sAHygTUCsdeUIUGQABiLEAKDQFFgwOPSEAERV8lAEikE4ApdcAFyR5f4HY2NiLpgGbuAEvLy9lrjljdwEZazovOAAUVC4rtmMXYzZYagA6RQAnQRR0igEpr18GGw+Ei2cawbkkp2hSVUIES1YMX1cIkKoiyKcFn5SnAAAG8UlEQVR4nO3ba3vaNhTAcWpMNW9u3a1zcUvLxdmS5UJKE3KBAU2atM2FrWTLbcma3bfv/w1mQ5ISgjmSrSO5T8//3V7M4fdIlmRDMxmKoiiKoiiKoiiKoiiKoiiKoiiK+rhaOO/0DqqtVuvndrtS2d9a2/le90eS1/Zhr9q0PM+yHMfxnthhhULBLhXb0690f7jEHXcOmlZIy15mPfnMuCqkGsXK2lvdnzJ283utnGNd424JL5lG6eKorPuzxmjmfSM7ohsrHChL7Y9tvs5Vc95tXpQwRBaKW7o/NH+LneZ43gRhUMHY/zjW14W95pjZySEMBrK0X9b98cG2Dyf5AGFo3Er5yjrXiJyfXMJgrhbTvOZsVwEfhzBYc9q6HZF1shbg4xGGU3VNN2VsMwcTb0ABYbA/VlJ4N8414QHkFQbG4o5u0GgdngHkFxq2caKbdLMDj8vHLwwW1X3dqKHWW1wzVExo2OlZU9cb3EARoWGfpmS9WedbY8SFwXqzqBsXNiMCFBMGxBScxcWAgsKAWNYNXBC4B2MIUzCK/KtoPGFA1Avs8e6DsYWG3oP4e1Fg1nomKtS69Z+J+mIJDVvbG5z1Jt9ZNKnQKOk6hlcFV5nYQl2rTUf4JowrNOyKDuB6VnyOxhUaBR3PUgcx5mhsoV1Sv/EfxgLGFWrYMrbF11HHsTzPexZ+sWbHMKpeT3tiQxjgrGbrYK9z9uvJ0XT7tBQwxYD2qVrgcU5kCC2rWX1/vjD0//+2s3VREhtK+xelQoFlxrFy1cOZMdcoH10YAka1m+IM/1Zo5XrjeIPKFQFjQeUgcg+hle1NfhHxtsI9V1UO4jnnTeh41XXwYuVTXqLCQeQcQifX4brcNOdUVbecHuf4ZmhznvOCJyXOYVT1xdse1zrjNRbgS11WLnIRC4oO4ItcxxmrJXRRPmJJzSviQwRgZpGLaB/hkEbiefB1GvAiejOuiapmrVnkGEEndy583R2eaWoggG7V4RhC7yzGhdcKKZmmVfg2tHqxrlyB56mKb9wW4c3Qacb8yohjWyzJ1YxrHt4MncOY1z6ChQX8B2H40Vd0oxgKPqIW8N8Ot+DbkPewdrtX8I14IdEythnwQGNVE1z+AhxE9Jdu8+AQWnMJLn8C7xjYN+IZtNA4jUTXL4I3IvYvwsCFxuN7JoxqGhpEe1qSJCpwofGS/XyiDAqxl5oGIEw4SYNdHxIiv61ZgJbSmAe2D7Wh1bRUlgGJ7BgUJrsNM5ktcL/AXUzPoVNpor0i7AQU4n7RNg8Jc8cJ/0IZAiI/QM0DQCeX+E9ASw3yyXQOEjYT/wlQiLshQsJEh9JB0PsabGFuctmkm0XwBPXV5JCFf92/d/9m9272e+I/8ecfs7Oz34R9N1T437P9/sO9D7+8e2dynyf+E/9+MTnzHwmO6BQIa8yc3N8SHNEpEPoA0FyS4IiOhMmFqxDQXJUBiQxfuALdhv4bGZDI8IV5SNh9KQMSGb4QWkpZTYYjOnwhNIRsQwJjQujCFRcQunUpkMjQha+hMXSXpUAiwxa+BHzBLMXdDtGFeWiSYm8W2MLdLrjQ1HYlUSJCFi5DQJMhLzTIwl0fFLorsigR4QrrINBkuCcaZOES6DNZVxolIlQhuMwEwilplIgwhXVwpwhuQ+TdEFUIb4XBEPoSLePDEy7DPgV7BaJwhQeI/QYjDEsIPtkPhhD52TAMSchzD5r4zxVhKMLdDT4g9guMfhjCFY59cDCE6JthBkO4WWecQNNEfnDqJ1045XPOUCVbRUa2cLXOuH2BEAt1I4nC1XzN5J6fyoZQinBzc3N1ud41XRGfafoKFtKMFGHN931RXZCbV8DLyBBybu6jqTjO9EsunBIevYEQ/0Q6SJdQyWbf76keIf7Li+s0CfEf7a/TI2SK1tEwLUJ3Q4HsKh1C1t1UQbtMyxji/jRhJA1ChatMmHohw/6iYiTlQpXLaD/VQnVnmasUC1U9UAyVXAj+Imh4iip4ezjaUwAoU8hMDUCVQuYrXkUHqRO6NRXvDm+nTOi+VsEZkyKhnluwnxqhW1N7UhtOhZCZyrf5oRQI3ZrSZ4nRHmIL3a6WPeJDuELm+uqPaSOhCpk/pfJpfnx4Qsa6eeSfHXKFJXTZhub77yoMIXPNWiqGr59sIXOZX8tr3R5GAoXfQle4ErIwvza1oueAHRkofAddIe8GMWZ2N+rLS6mZmx8ChXfuPh/0eGzPH//4w5vVzRTKroKFUMn/+R5uJCQhCfVHQhKSUH8kJGH6hV+TkISfgBB8CaA5EpKQhPojIQlJqD8SkpCE+iMhCdMvfPEuIfDuQ90EqJ8ePAp7INKjoV7oBlAURVEURVEURVEURVEURVEURVFo/Q/ZTgk9SI9qcQAAAABJRU5ErkJggg=="
                />
                <h5>Passport.js</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="bcrypt-js"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXw8PCb2YP08fWv3p7y8PKW2Hzc6tiZ2YCr3Zng69yU13mX2H6u3pzb6taq3ZeQ1nTr7+q+4rHP58e44KqKHb6HAAABHUlEQVR4nO3cyRGDMBBFQQzCbDbe8s/VzsAqDsNAdQegmndX/aYBAAAAAAAAAAAAAAAI0UYr0YGvWxdqnIIT29syhJqv0YXdcAnVK1SoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChZsLx7kP9bgHF5bpGuv+jA38JUaLDgQAAAAAAADgRKxGWI2wGrH/jyGFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVHiewqrViKXq+OHAqxHvmsRhrXkr52pEO/U1hWN72NWIUlu496GbKVSYn0KF+SlUmJ9ChfkpVJifQoX5KVSYn0KF+SlUmJ9ChfkpVJhfmeaaMYH1yIXr+N/6OW5hU+pGPfY+EwAAAE7gC/3JSPgV7/y+AAAAAElFTkSuQmCC"
                />
                <h5>Bcrypt.js</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="draft-js"
                  src="https://draftjs.org/img/draftjs-logo.svg"
                />
                <h5>Draft.js</h5>
              </Col>
              <Col>
                <img
                  className="tech-icon"
                  placeholder="Sass"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEXMZpn////LYpfJWZLKXZTKX5XIV5HKXpX+/P304er36O/qxNbXi7DWiK778/fsytrQdKLlt83YkLPcm7rNapzv1OHeor/hq8X9+PrPcJ/ryNj25u7nvNDSeaXks8rw1uLUgargp8LalrcytUjbAAAQ7klEQVR4nNVd2baiOhDFDCiogAqCA8fh/z/yAk5kpAIV27ufevXyKJtUqlJjgplvLJJTsdyU++21rg+HPMgPWV1ft/tysyxOycL77wc+v/yUlqssoJRxzgkJSPBC82/S/B+jNMhWZXry+RC+GMbLXRY21D6sTCAt0estjT09iQ+Gp80qoGyYm0QzWG18LCY2w6rY5XTuxO5Dc07zXVEhPxEqw2S5Zm5rp7JkbL1MMB8Kj+HiuHYUTSNJuj7i6VgshtEdh96b5C5CejIchsuM4tF7kqTZEuXZEBjGe8qQ6T3A6B7BhExmGK0o98KvBaerycI6kWF0DbHFUwQJrxM5TmIYXdG3n4YjncZxAsN47Xn93hzD1YTDzmiG1e4L6/fmSHejjzpjGZ6ZP/2iA2fnrzKMDn7sgw0sG7cdxzBc7OjX+bWguzFnuREM0/l3BfQDztMvMFxs/80CPkC3zhrHlWFB/tUCPsBJ4Zfh7V8u4AP05pFhUn9fhapgtZOH7MKwAMSVvgEyd5FUB4Zl+K+pvRGWHhgu1r8goS+wNdg0QhkmB786lBA+Zy88AshW8AN0MwIZRohBGIkaZzQM6vWu3CzTtGiQHs9/+22dt7Fyy9/NgYc4GMOLFyPRksvv5THSL0cVHfeZmSWhFzyGSw86hlN2LYtBUasuZUYNOjwEhaogDM/YBAljdXkB64q4zPW+aAjxqAAM/3BFtKF3T12j2sVKG08I/zAYohJsg/bpqHh2fNetIx2mOMgQkyAP6/P4nER81TzKMMUhhiUaQcLIbWKA96hROXToeDPAcINFkIT1OOkUUGkOVnQzhSGWmWDzHVLyUyNTA0bDyvCCQpCwYIOX9tSYrtDqatgYRhgiSmjt6pXboZErajvAWRgmI5PVIr/pqRUZqnYnc4uGNjNcZJMJcrpz0J5VEkfNsfuYFpdLbDMqd+WoSjKzFjMzXE91lzjbA41fXPzt6qCtOnm6T80/yGH7dzFs30B593ztzrCc6PCScAfhlxTlmrR1N8pDk9b1uP7phEDj6jCjWTQxLKapURJuh+UzSff5QFER4fSqcZLW6t8YFaqBYTJNRAEpv/jvyiAlU21CX+EYad4/N4iMgWE9Rcuww5B9iP/y0CFwF25lRaJ5PlK7MJyyCQfzYMmmNvm0xu/MJZlfah7QsBW1DCcELRoFYz+/NJ7efMTXcpFipNtF+rCGjuFivIiy2roBkzIYGdIiB+GLjlohIzqrqGO4HatmiF1Ao204XoGJMhhrpYxvYQzTsTJKVzYLeJlYuCEsUKV/VVSTX1QZLka+Z2JNXxb11MIGJnx9bngIVU5VhrtxDOnKomHSw/TCDXLvf2Om/xDfDTMc5zIRnXz01m8KtRfy/ndeDW9MdaQUhoblt8OW0rtMls8nQghD8T3oGJ7H2Hq6N/KLV2iFRWF/GxgZKupcYmjQUVZYEpbJDrEwjPblpDZ+jEv6QGI4Qs3MM6OE/nHMlFzY15MH48dkZSMy1BtSK6iqvZ5IA9ycKu19t+3YRcUDnshw5SxTxphzjF2ZKfgOieXlkZWZoc7tsv9qaDISJXrlIu+rs4tNPELBYggMjQrKAEIM5+wiwM+JC2eajc0/IVcTQ1djTwKDjvFSesr6P7a1/oBg9vsMHZeQ1/oQ3sVLYRgRoml2F1NYxB5Dx13IBVn4YO+ndpgdHaStvxN7DO0rL8NA8JSP8OAhIP1fKQekhPQcxQ9DN1toiPssfVX2ccEqme39Ez2b+GG4d9k95KDdg3dvpYvCWWxYJfZMy5vhwmUXklznDCaZJwltdqGQBt0N76fPEe/N0MmpYDozcfFYuij4RBVgMT4uxpuhwWnW/7nO0KNX3fQgxgn/IKLyjs29GLpYe+1RDa+kQcVcON3Dgp1vq/9ieIdLmDa27LVBQYyV/oFU4jus82S4gO9CojOEW5/Fp6HgDkEflS0EhvoYshZEo0ZXPglKQS6oVXud1J8M4Y6hLjngdQUlDxR8MHm5iQ+GCXgXaQKSs51Pgkz6QXje7xnXeTDUJau0IEqwzq8WDbjosM828LfJlj2GmqyxHlQNq41Oc4CeUiIYOxjdp7/VMazAS6gmd04+exTYXfo1pwoYVr0ZFlCGmtPaqBg5EEqkWa2ksYEVb4aAk2yHuWrr3X7TDUrVoWOlJNm9GYJ/UnGZJhalWJ9PsUvuyfcXQ6iJ4WpsVK1OwoKa7HEPV3d+cMvwDJQ0OSMwHE0YDaImexL3l8nPT4bAAA1Xf9RbzCJQTk7JUJ+QBp3qD+DbMFTKfJ0CHw4PRvfKhk/G7YcHQ6h8Z/Kvgs2oG6imYiUeR7DdiAHYr5grFeObwSUcUYPLAo1/HY0MALVB1gAsa1QpNhyM6ZGlq1vFtBU5ow+GreoIoKd1qSipwWnod8ne0e9ggbazYHzzahvVbRjCXhBR3KZBIe1UGdh3NI1Nqq4TtjttGQ4uxQNM+XmA1wxeAcK4YfTVZYSV+ICeGoYp7BVpClUG8QgkXHJ7tR4hbL4yNNQs9tNMbvMEATB0JVZCdNIzvDYvf3lp6B/s2LVz9kyV9unUTGtz0AygJxoq/zokwvqOeaRrteSZzBk73JfmevB4PfnM1KiCABrsJvLvW1PpL9C38q+K25WH9NVtEM7r++Ziq2VM9hi1ONksWAA/qjCEuc1UsG9JVKTL5bGITkONUMltQi1qH4sAenpWpBQYGAD16sqI7lhD4GgSAI1Fq3dFgKS0/UNd4a51+c4ItZqfxw6gMRrFHoJzOTx3aF5bpCvUGVusCKDxfCKHvSBZvOefUkADTbd6yxXmBM0W7BgMOwiv55Sf5wB/FkJXQwMQknR/wKbXgG+CG5Qhk2UNGqHrQGhemlrRkui8O4SgFiFn8DLYQ79XiQaDo6zPv+eNgd/9HS+nZPFAEl2WbVseo4OjTEaD7AJ4FU0o2+cRgZOWJqWUcz6nYdtu6I/b8xe3wRX8YX6TGHqLtGHiGjh0qcndtt5CbYggdeBQg6HkDv9+abCSAVngkllR4on5bwz/suHgxJDIAUWckQRe4ZgbUwpNbv8DOXVDKMcyXAunfx4klwIOC4ez2z+Co5wSubV/REroq8hdGQZMzkDFPzJN0YDcxR4+oOSeTz+tbTKXM80TSlwi9ny2nILmTHN1/6vwKFFMftjyXx18iw+UuUWL2lv980Q0vgXYP+xDDaD90/nJFjT+IdjHF6DOEPuh+a198Bs8TiNCrZUovA0AnQK+AcfaZMg1dY1K9TzEdRTYERwvVcDV7tgf3IysAMe8VRCiRAg3P7cZ6Qmct9BBHa4Z/ZrxpxU496SFuhknZd19YAHOH+rBcyX5PTEvjYwMngM2QR09mf6Q2ehywMA8vhF0LQfr4/xnzEaXxwfWYphBlAsZfmd+e1eLMd5cvKHOVfhH97Qo6OppgDVRVqgKx2evngOoQ13b0FfJR3GvbRhQPOvacOpgWSblef2N4ofjWZs49uwtgVDJaYw/b47wR1btWU3D+JeiV8/60hEjW/SQ7Ubcvrr2kth6ezunlyiOkw6nYtmN9PTP8lkjDG63GAQhYn3vidDD3jRhPl5u595Jzpxq9SEIRbsR24d8LlK/1ye+a/Wh/RYQ8IPb4O4T3qQszcO8+i3QNmKHoRnpMiLduHykR3n1zCD3nzmXeS19adauvNWpdw0Ipp0pYYGnm7J6vWuTD9/C99K1Xr9UjaGoKn05sBen8lGE7dZDCoBuSPLpWK4POWlM/ZyTvF7tz5FM1Eczca+HFN4HPPilB7XjJQ2led3NCYeG2V4sXke+6yUQ+4Dhvdx2cKLrmDDMheGM3/vBuj32XhR6uVFqfwi96TeZ8URBaN57JWiC9AStegxHDNtTv3BtKiK1HO0JO7zXsUKe0SfMVJiuTXkghTKq+1vj2CUkfJfm4rqU0lwMh9kmWshxjKqkPWfK3uT2uSQOtXRFmm3iMp9GhRLEOJN5vx51YIeR+fMs6zy30fal0nyaKTeuEPlm0EveScSnRGxwvNqrEQBxEZUZQ+ND33JXcvLKQH0mTwOcl8dnEQ9XypyocQOEG9C7aCKWb2/o0ws2nMF7TVNHY6iZ9eU0r633TaKNr1Yfaf/0oAC2wHOQEJozTtV5baNCbvKtDEX/cPbpWAQ4oM9GPixnXDdzb4wfzKQiN9FDcGL4nHyDcsVUYJib6C4hUrWCnDp0Y/g4giCVjutnXzpbIylcoaR/P5oGJB6dhZ5wtUYfhvmljtZIqv1KlYgSe3v6INnrlnxSRvoN0wxat00gTYxSb0PrNfCDGvm6cyTOGhrnCLssonS90ll9Ob2x2iBD3tmdCsWNM86CdtiJVDSDulxab16PdTb1C92gYBRdapnnDXYTpZr9o+7N9EQFFMvrPr9EsIe2mexQmyiNidMvPft8ACT9XX8jhp9vnasPuxtBKtivtFVCvVMFSH10fWMY5tB+N8KsguwYqelCv0I9IQVJRtf7h5Gsndvvt4C4GFJHsEaNBuI0bMhhsxuFjJFAGbqjBJLDEAfvGaLJfXMJ0F+PGxoxKgoG75kZHvsmDarR71zBJA2vDO9WHGNKqDpe1f2+J3HmrUGw+vMJhv1fumpVF0ZgH3Lf05Dmk8bN698Hu/U+MuSzPG9rQykyUlrqR9y7xoWdrI8MCDOlbBemdB/uxgdGKCXUmvGq7nfnifZUn/AQPjM0X7zt8493KHFE6N15A3IqfFSrJsU3Oagf8y3WrV7g+w9t+lSaO6D7SCh4xoDBv2jRJ/AdlrbmV3HCp06TitOpkZx2CFzuIbXYXvEWQo1rK66gr+GRGrjdJWu+D5gJkqCYOiK+AbTYGQCO9wEbx+eKDOUNy+Quk8HRimhwvdPZeCWwyFD0dgiT+y98zlGWnsv5Xm7T3erSlJqex8rpXZYTb/fqKBhzt/psoZ0OLh5pZsmjvJBwym9Kkvt7ExdIZpraZ2PYPL2GojxMuNrUjc1el5pdEH2tYJ/IU1eADPWKUJm1a0L8vY4EdWolkKFWoWqvCdK9nu+VeRvV6DBDTSRb3ogmfLFUX+m7dmGomWSvTtvV4YtdwUP1rAMMNY43k7vxVVRf7ApSe64dGeoq6sya+YHjFydlDBIcZqhS1PqZH8T+qpo1BE0XvbownP3Je8r2tTHKXFUo1DbdUQzVzJJcIvRGtMWaOwojCNHrEIaq0WC6OsR4gxWNgBK0mwkXhmpYg9C6LJK3yqlO6T6nX57+oQ9ajGQ4i9QzKmeUZNft/b6tc/aNJiYRZG7vx3FlOEv08UzS4cvkWnxKNrEY/lBvbwu2HjLK7gx/aj5LOGjnRzGcFSMu5PABwh1GLzsx9NW94wj1niQ8hrPZ7d/3LxuPGzgMZ4WXa8Xh4Mp4A2yGs+qfjtmhW8e2uBEMG/ed/6tl5HPdPb34DGeLfzQTgu7ARnAiwzZj+32lyjLgMQ2FYVt3811R5cAIGB7DWbX7oqtE6M5Zw0xm2Daaf8mdJ+EKdrcCNsOu0dw/R6Lru/0Ww5aj53Uk4TR+kxk2HFceQzOcribyQ2DYhteoH9vB6H7C/kNk2GCZoW9I00VzzsBh2N1fhBiqIYzdJ4vnE1gMm7PccY1DkjC6Po45n+mBx3DW3vWzZhNJNqu3Xjp5uENAZThrr1fb5XRktIPM23v0Rh9eDMBm2OK0WQXU7eof0o6TWm3cpvfA4INhizi9XSmIZkuOXm8pgmHQwhfDDqe0XGVBS5S3oz8+bEl7axBvqQXZqkx9LN0bXhl2WLTTyzblfnut68MhD/JDVtfX7b7cLItTgqczTfgPAtLG4Q774qsAAAAASUVORK5CYII="
                />
                <h5>Sass</h5>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutUs;
