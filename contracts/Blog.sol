// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Blog {
    struct Post {
        uint id;
        address author;
        string title;
        string content;
        bool isDeleted;
    }

    Post[] private posts;

    event PostCreated(uint id, address author, string title, string content);
    event PostDeleted(uint id);

    // Create a new blog post
    function createPost(string memory _title, string memory _content) public {
        uint postId = posts.length;
        posts.push(Post(postId, msg.sender, _title, _content, false));
        emit PostCreated(postId, msg.sender, _title, _content);
    }

    // View a blog post
    function viewPost(uint _postId) public view returns (uint, address, string memory, string memory, bool) {
        require(_postId < posts.length, "Post does not exist");
        Post memory post = posts[_postId];
        require(!post.isDeleted, "Post is deleted");
        return (post.id, post.author, post.title, post.content, post.isDeleted);
    }

    // View all blog posts
    function viewAllPosts() public view returns (Post[] memory) {
        uint activeCount = 0;
        for (uint i = 0; i < posts.length; i++) {
            if (!posts[i].isDeleted) {
                activeCount++;
            }
        }

        Post[] memory activePosts = new Post[](activeCount);
        uint currentIndex = 0;
        for (uint i = 0; i < posts.length; i++) {
            if (!posts[i].isDeleted) {
                activePosts[currentIndex] = posts[i];
                currentIndex++;
            }
        }

        return activePosts;
    }

    // Delete a blog post
    function deletePost(uint _postId) public {
        require(_postId < posts.length, "Post does not exist");
        require(posts[_postId].author == msg.sender, "Only the author can delete this post");
        posts[_postId].isDeleted = true;
        emit PostDeleted(_postId);
    }
}