$(document).ready(function() {
	// Blog post
	var post1 = {
		title: "How Handlebars Works",
		published: new Date(),
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur a repellat corporis ullam quidem esse dolores reprehenderit. Dolore tenetur fugiat, eaque vero eligendi, omnis tempore eos earum. Officiis voluptate, hic!"
	};

	// Blog post
	var post2 = {
		title: "I kinda got Handlebars to work",
		published: "April 30, 2014",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus veritatis obcaecati natus fugit, sint aspernatur cupiditate expedita at hic quo temporibus facere, tenetur alias ut. Molestiae necessitatibus provident iure autem."
	};

	// Edit blog posts
	post1.body = "<p>" + post1.body + "</p>";
	post1.tags = ["Handlebars", "JavaScript", "Web Development"];

	post2.body = "<p>" + post2.body + "</p>";

	// Create posts array
	var posts = [];
	// Add both posts to array
	posts.push(post1);
	posts.push(post2);

	// Get posts template script
	var postsTemplateScript = $("#posts-template").html();
	// Compile posts template
	var postsTemplate = Handlebars.compile(postsTemplateScript);

	// Get tag partial script
	var tagTemplateScript = $("#tag-template").html();
	// Register tag partial
	Handlebars.registerPartial("tag", tagTemplateScript);

	$("body").append(postsTemplate({posts: posts}));
});
