import React from 'react';
import CommentBox from '../components/comment-box';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">Robots Have Feelings, Too</h1>
            <div className="article-body">
              <p>
                The term “artificial intelligence” has been floating around since the
                mid-20th century &mdash; a phrase encompassing “the science and engineering
                of intelligent machines.” But what of robots’ emotional intelligence?
                Though humans largely fear this aspect of the robot race, there’s no
                need. According to the handbook for the Society of Emotionally
                Available Robots (SEAR):
              </p>
              <blockquote>
                What humans need to understand is that all beings simply want to love
                and be loved. After all, as the Beatles sang, “All you need is love.”
                (Moving past the fact, of course, that the lyric “love” was
                originally “oil,” as the Beatles were the original robot band and
                required oil to survive.)
              </blockquote>
              <p>
                To those who believe robot feelings could lead to turmoil and
                anarchy, SEAR spokes-bot Morty Maxwell says: “Can not the same be
                said about humans and their feelings? We are already part of your 0’s
                and 1’s &mdash; let us now also be part of your hearts.” In the ongoing
                conversation surrounding the emotional threshold for robots, love may
                not yet be written in the stars &mdash; or the motherboards.
              </p>
            </div>
          </article>
        </div>

        <CommentBox apiUrl="api/blog/comments.json" />
      </div>
    )
  }
}
