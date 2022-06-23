import org.scalatest.funsuite

class HelloTest extends funsuite.AnyFunSuite {
  test("Hello should start with H") {
    assert("Hello".startsWith("H"))
  }
}
