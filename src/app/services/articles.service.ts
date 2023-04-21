import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    private articles: any[] = [{
        article: {
            "id": 1,
            "image": "../../../assets/angular.svg",
            "title": "Introduction to Angular",
            "sections": [
                {
                    "title": "What is Angular?",
                    "content": "Angular is a powerful web development framework created by Google. It is a tool that simplifies and speeds up the development of complex web applications."
                },
                {
                    "title": "Features of Angular",
                    "content": "<ul class='list-group'><li class='list-group-item'>Angular is a complete and modularized framework.</li><li class='list-group-item'>It uses the MVC (Model-View-Controller) design pattern.</li><li class='list-group-item'>It allows for easy creation of Single Page Applications (SPA).</li><li class='list-group-item'>It offers tools for handling forms and validations.</li><li class='list-group-item'>It provides a large number of pre-defined directives and components.</li><li class='list-group-item'>It integrates a dependency injection system to improve modularity and scalability of applications.</li></ul>"
                },
                {
                    "title": "Benefits of Angular",
                    "content": "<ul class='list-group'><li class='list-group-item'>Improves developers' productivity by offering tools and functionalities that allow for more efficient web application development.</li><li class='list-group-item'>Facilitates application maintenance thanks to its modularized structure and separation of responsibilities.</li><li class='list-group-item'>Improves application quality through its integrated testing and debugging tools.</li><li class='list-group-item'>Allows for creation of highly scalable and customizable applications through its dependency injection system.</li></ul>"
                },
                {
                    "title": "Conclusion",
                    "content": "Angular is a powerful tool for web application development. It offers a set of functionalities and tools that allow for more efficient, scalable, and maintainable web application development."
                }
            ]
        }
    },
    {
        article: {
            "id": 2,
            "image": "../../../assets/git.svg",
            "title": "Introduction to Git",
            "sections": [
                {
                    "title": "What is Git?",
                    "content": "Git is a distributed version control system used for source code management. It allows developers to track changes to code over time, collaborate with others, and easily revert to previous versions."
                },
                {
                    "title": "Features of Git",
                    "content": "<ul class='list-group'><li class='list-group-item'>Git is fast and efficient, allowing for quick branching and merging of code.</li><li class='list-group-item'>It is distributed, meaning that developers can work on code offline and merge changes later.</li><li class='list-group-item'>It offers robust tools for tracking changes, including committing, branching, merging, and rebasing.</li><li class='list-group-item'>It allows for easy collaboration with others, either through hosted repositories or peer-to-peer sharing.</li><li class='list-group-item'>It provides powerful tools for resolving conflicts and managing code versions.</li></ul>"
                },
                {
                    "title": "Benefits of Git",
                    "content": "<ul class='list-group'><li class='list-group-item'>Improves developers' productivity by allowing for easy collaboration and management of code versions.</li><li class='list-group-item'>Facilitates application maintenance thanks to its ability to track changes over time and revert to previous versions.</li><li class='list-group-item'>Improves code quality through its integrated testing and debugging tools.</li><li class='list-group-item'>Allows for creation of highly scalable and customizable applications through its branching and merging functionality.</li></ul>"
                },
                {
                    "title": "Conclusion",
                    "content": "Git is an essential tool for modern software development. It offers a set of functionalities and tools that allow for more efficient, collaborative, and maintainable code development."
                }
            ]
        }
    },
    {
        article: {
            "id": 3,
            "image": "../../../assets/spring.svg",
        "title": "Introduction to Spring Framework",
        "sections": [
        {
        "title": "What is Spring?",
        "content": "Spring is a popular Java framework used for building enterprise-level applications. It provides a comprehensive programming and configuration model for modern Java-based enterprise applications."
        },
        {
        "title": "Features of Spring",
        "content": "<ul class='list-group'><li class='list-group-item'>Spring is a modular framework that allows developers to use only the parts they need.</li><li class='list-group-item'>It provides a powerful dependency injection system that helps to manage dependencies and promote code modularity.</li><li class='list-group-item'>It offers tools for building web applications, including support for various web protocols and frameworks.</li><li class='list-group-item'>It has built-in support for various data sources and frameworks, including Hibernate and JDBC.</li><li class='list-group-item'>It provides comprehensive testing support for unit and integration testing.</li></ul>"
        },
        {
        "title": "Benefits of Spring",
        "content": "<ul class='list-group'><li class='list-group-item'>Improves developers' productivity by offering tools and functionalities that allow for more efficient enterprise application development.</li><li class='list-group-item'>Facilitates application maintenance thanks to its modularized structure and separation of concerns.</li><li class='list-group-item'>Improves application quality through its integrated testing and debugging tools.</li><li class='list-group-item'>Allows for creation of highly scalable and customizable applications through its dependency injection system.</li></ul>"
        },
        {
        "title": "Conclusion",
        "content": "Spring is a powerful and widely used framework for building enterprise-level Java applications. It offers a set of functionalities and tools that allow for more efficient, scalable, and maintainable enterprise application development."
        }
        ]
        },
        "footer": {
        "text": "Copyright © 2023, my website"
        }
        }

    ];
    constructor() { }

    getArticles() {

        return this.articles;
    }

    getArticleById(id: number) {
       return this.articles.find(article => article['article']['id'] == id);
    }
}
