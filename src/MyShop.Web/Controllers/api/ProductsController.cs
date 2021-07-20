using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MyShop.Web.Models;

namespace MyShop.Web.Controllers.Api
{
    [ApiController]
    [Route("api/products")]
#nullable enable
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts(string? category)
        {
            IEnumerable<Product> products = MockProducts();

            if (!string.IsNullOrWhiteSpace(category))
            {
                products = products.Where(w => w.Category == category);
            }

            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct([FromRoute] int id) => Ok(MockProducts().First(w => w.Id == id));

        [HttpGet("categories")]
        public IActionResult GetCategories() => Ok(new[] { "Category 1", "Category 2" });

        private IEnumerable<Product> MockProducts()
        {
            int count = 5;
            var products = new List<Product>();

            for (int i = 1; i <= count; i++)
            {
                var product = new Product
                {
                    Id = i,
                    Name = $"Product {i}",
                    Picture = $"/images/p{i}.jpg",
                    Price = i * 0.5,
                    Category = string.Format("Category {0}", i % 2 == 0 ? "1" : "2")
                };
                products.Add(product);
            }

            return products;
        }


    }
}