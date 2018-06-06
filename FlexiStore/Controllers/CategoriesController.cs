using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlexiStore.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FlexiStore.Controllers
{
  [Route("api/[controller]")]
  public class CategoriesController : Controller
  {
    private readonly ICategoryRepository _repository;
    private readonly ILogger<CategoriesController> _logger;

    public CategoriesController(ICategoryRepository repository, ILogger<CategoriesController> logger)
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
        return Ok(_repository.GetAllCategories());
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to get products: {ex}");
        return BadRequest("Failed to get products");
      }
    }
  }
}
