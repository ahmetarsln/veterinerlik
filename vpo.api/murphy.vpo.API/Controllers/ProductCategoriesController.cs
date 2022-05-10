using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCategoriesController : ControllerBase
    {
        private readonly IProductCategoryService _productCategoryService;
        private readonly IMapper _mapper;

        public ProductCategoriesController(IProductCategoryService productCategoryService, IMapper mapper)
        {
            _productCategoryService = productCategoryService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetProductCategoriesAsync")]
        public async Task<ActionResult<List<ProductCategoryDto>>> GetCompanysAsync()
        {
            var productCategories = await _productCategoryService.GetAllAsync();
            if (productCategories == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<ProductCategoryDto>>(productCategories));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetProductCategoryByIdAsync")]
        public async Task<ActionResult<UserDto>> GetProductCategoryByIdAsync(int id)
        {
            var productCategory = await _productCategoryService.GetByIdAsync(id);
            if (productCategory == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductCategoryDto>(productCategory));
        }
        // POST api/values
        [HttpPost(Name = "AddProductCategoryAsync")]
        public async Task<ActionResult<ProductCategoryDto>> AddProductCategoryAsync(ProductCategoryDto productCategoryDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var productCategory = _mapper.Map<ProductCategory>(productCategoryDto);

            await _productCategoryService.AddAsync(productCategory);
            return CreatedAtRoute("GetProductCategoryByIdAsync", new { id = productCategory.Id }, _mapper.Map<ProductCategoryDto>(productCategory));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateProductCategoryAsync")]
        public async Task<ActionResult<ProductCategoryDto>> UpdateProductCategoryAsync(int id, [FromBody] ProductCategoryDto productCategoryDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != productCategoryDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _productCategoryService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var productCategory = _mapper.Map<ProductCategory>(productCategoryDto);
            await _productCategoryService.UpdateAsync(productCategory);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveProductCategoryAsync")]
        public async Task<ActionResult> RemoveProductCategoryAsync(int id)
        {
            var productCategoryToBeDelete = await _productCategoryService.GetByIdAsync(id);

            if (productCategoryToBeDelete == null)
            {
                return NotFound();
            }
            await _productCategoryService.DeleteAsync(id);

            return NoContent();
        }
    }
}
