namespace FlexiStore.Data.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public Category MainCategory { get; set; }
        public string Size { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Brand Brand { get; set; }
    }
}