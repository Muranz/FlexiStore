using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlexiStore.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FlexiStore.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IProductRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllProducts());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repository.GetProductById(id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get product: {ex}");
                return BadRequest("Failed to get product for id " + id.ToString());
            }
        }

        // GET api/<controller>/5
        [HttpGet("{value}")]
        public IActionResult Get(string value)
        {
            try
            {
                return Ok(_repository.GetProductsByCategory(value));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get product: {ex}");
                return BadRequest("Failed to get product for id " + value);
            }
        }

        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
