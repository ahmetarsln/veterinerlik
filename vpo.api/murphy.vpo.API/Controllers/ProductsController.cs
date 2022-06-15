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
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ProductsController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetProductsAsync")]
        public async Task<ActionResult<List<ProductDto>>> GetCompanysAsync()
        {
            var products = await _productService.GetAllAsync();
            if (products == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<ProductDto>>(products));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetProductByIdAsync")]
        public async Task<ActionResult<UserDto>> GetProductByIdAsync(int id)
        {
            var product = await _productService.GetByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductDto>(product));
        }
        // POST api/values
        [HttpPost(Name = "AddProductAsync")]
        public async Task<ActionResult<ProductDto>> AddProductAsync(ProductDto productDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var product = _mapper.Map<Product>(productDto);

            await _productService.AddAsync(product);
            return CreatedAtRoute("GetProductByIdAsync", new { id = product.Id }, _mapper.Map<ProductDto>(product));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateProductAsync")]
        public async Task<ActionResult<ProductDto>> UpdateProductAsync(int id, [FromBody] ProductDto productDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != productDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _productService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var product = _mapper.Map<Product>(productDto);
            await _productService.UpdateAsync(product);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveProductAsync")]
        public async Task<ActionResult> RemoveProductAsync(int id)
        {
            var productToBeDelete = await _productService.GetByIdAsync(id);

            if (productToBeDelete == null)
            {
                return NotFound();
            }
            await _productService.DeleteAsync(id);

            return NoContent();
        }
    }
}
