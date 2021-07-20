using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyShop.Web.Controllers
{
    [Route("products")]
    public class ProductsController : Controller
    {
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult ProductsIndex()
        {
            return View();
        }
    }
}
