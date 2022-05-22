using murphy.vpo.BAL.Abstract;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Concrete
{
    public class ProductManager : IProductService
    {
        private readonly IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public async Task AddAsync(Product product)
        {
            await _productDal.AddAsync(product, true);
        }

        public async Task DeleteAsync(int productId)
        {
            await _productDal.DeleteAsync(productId, true);
        }

        public async Task<IList<Product>> GetAllAsync()
        {
            return await _productDal.GetAllAsync();
        }

        public async Task<Product> GetByIdAsync(int productId)
        {
            return await _productDal.GetByIdAsync(productId);
        }

        public async Task UpdateAsync(Product product)
        {
            await _productDal.UpdateAsync(product, product.Id, true);
        }
    }
}
